import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class item_proseScalarWhereInput {

    @Field(() => [item_proseScalarWhereInput], {nullable:true})
    AND?: Array<item_proseScalarWhereInput>;

    @Field(() => [item_proseScalarWhereInput], {nullable:true})
    OR?: Array<item_proseScalarWhereInput>;

    @Field(() => [item_proseScalarWhereInput], {nullable:true})
    NOT?: Array<item_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    short_effect?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;
}
