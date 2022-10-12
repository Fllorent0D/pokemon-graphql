import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_meta_categoriesRelationFilter } from '../prisma/move-meta-categories-relation-filter.input';

@InputType()
export class move_meta_category_proseWhereInput {

    @Field(() => [move_meta_category_proseWhereInput], {nullable:true})
    AND?: Array<move_meta_category_proseWhereInput>;

    @Field(() => [move_meta_category_proseWhereInput], {nullable:true})
    OR?: Array<move_meta_category_proseWhereInput>;

    @Field(() => [move_meta_category_proseWhereInput], {nullable:true})
    NOT?: Array<move_meta_category_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_meta_category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_meta_categoriesRelationFilter, {nullable:true})
    move_meta_categories?: Move_meta_categoriesRelationFilter;
}
