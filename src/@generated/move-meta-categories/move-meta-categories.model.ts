import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_meta } from '../move-meta/move-meta.model';
import { move_meta_category_prose } from '../move-meta-category-prose/move-meta-category-prose.model';
import { Move_meta_categoriesCount } from '../prisma/move-meta-categories-count.output';

@ObjectType()
export class move_meta_categories {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [move_meta], {nullable:true})
    move_meta?: Array<move_meta>;

    @Field(() => [move_meta_category_prose], {nullable:true})
    move_meta_category_prose?: Array<move_meta_category_prose>;

    @Field(() => Move_meta_categoriesCount, {nullable:false})
    _count?: Move_meta_categoriesCount;
}
