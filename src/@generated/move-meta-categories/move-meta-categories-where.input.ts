import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Move_metaListRelationFilter } from '../prisma/move-meta-list-relation-filter.input';
import { Move_meta_category_proseListRelationFilter } from '../prisma/move-meta-category-prose-list-relation-filter.input';

@InputType()
export class move_meta_categoriesWhereInput {

    @Field(() => [move_meta_categoriesWhereInput], {nullable:true})
    AND?: Array<move_meta_categoriesWhereInput>;

    @Field(() => [move_meta_categoriesWhereInput], {nullable:true})
    OR?: Array<move_meta_categoriesWhereInput>;

    @Field(() => [move_meta_categoriesWhereInput], {nullable:true})
    NOT?: Array<move_meta_categoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Move_metaListRelationFilter, {nullable:true})
    move_meta?: Move_metaListRelationFilter;

    @Field(() => Move_meta_category_proseListRelationFilter, {nullable:true})
    move_meta_category_prose?: Move_meta_category_proseListRelationFilter;
}
