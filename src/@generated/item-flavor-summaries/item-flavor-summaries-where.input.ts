import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';

@InputType()
export class item_flavor_summariesWhereInput {

    @Field(() => [item_flavor_summariesWhereInput], {nullable:true})
    AND?: Array<item_flavor_summariesWhereInput>;

    @Field(() => [item_flavor_summariesWhereInput], {nullable:true})
    OR?: Array<item_flavor_summariesWhereInput>;

    @Field(() => [item_flavor_summariesWhereInput], {nullable:true})
    NOT?: Array<item_flavor_summariesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor_summary?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;
}
