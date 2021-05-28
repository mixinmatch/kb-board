package board.service;

import board.model.Board;
import board.model.Bucket;

import java.util.List;

public interface BucketService {
    Bucket createBucket(Board parentBoard);
}
