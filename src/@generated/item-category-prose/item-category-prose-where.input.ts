import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Item_categoriesRelationFilter } from '../prisma/item-categories-relation-filter.input';

@InputType()
export class item_category_proseWhereInput {

    @Field(() => [item_category_proseWhereInput], {nullable:true})
    AND?: Array<item_category_proseWhereInput>;

    @Field(() => [item_category_proseWhereInput], {nullable:true})
    OR?: Array<item_category_proseWhereInput>;

    @Field(() => [item_category_proseWhereInput], {nullable:true})
    NOT?: Array<item_category_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Item_categoriesRelationFilter, {nullable:true})
    item_categories?: Item_categoriesRelationFilter;
}
