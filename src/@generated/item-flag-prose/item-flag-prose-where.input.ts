import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Item_flagsRelationFilter } from '../prisma/item-flags-relation-filter.input';

@InputType()
export class item_flag_proseWhereInput {

    @Field(() => [item_flag_proseWhereInput], {nullable:true})
    AND?: Array<item_flag_proseWhereInput>;

    @Field(() => [item_flag_proseWhereInput], {nullable:true})
    OR?: Array<item_flag_proseWhereInput>;

    @Field(() => [item_flag_proseWhereInput], {nullable:true})
    NOT?: Array<item_flag_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_flag_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Item_flagsRelationFilter, {nullable:true})
    item_flags?: Item_flagsRelationFilter;
}
