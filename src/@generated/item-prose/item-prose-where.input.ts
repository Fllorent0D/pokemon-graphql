import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';

@InputType()
export class item_proseWhereInput {

    @Field(() => [item_proseWhereInput], {nullable:true})
    AND?: Array<item_proseWhereInput>;

    @Field(() => [item_proseWhereInput], {nullable:true})
    OR?: Array<item_proseWhereInput>;

    @Field(() => [item_proseWhereInput], {nullable:true})
    NOT?: Array<item_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    short_effect?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;
}
