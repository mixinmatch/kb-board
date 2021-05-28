package board.service;

import board.model.Board;
import board.model.Bucket;
import board.repository.BucketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BucketServiceImpl implements BucketService {

    private BucketRepository repository;

    @Autowired
    public BucketServiceImpl(BucketRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Bucket createBucket(Board parentBoard) {
        Bucket b = new Bucket();
        b.setParentBoard(parentBoard);
        return repository.save(b);
    }
}
