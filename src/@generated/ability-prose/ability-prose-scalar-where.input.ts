import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ability_proseScalarWhereInput {

    @Field(() => [ability_proseScalarWhereInput], {nullable:true})
    AND?: Array<ability_proseScalarWhereInput>;

    @Field(() => [ability_proseScalarWhereInput], {nullable:true})
    OR?: Array<ability_proseScalarWhereInput>;

    @Field(() => [ability_proseScalarWhereInput], {nullable:true})
    NOT?: Array<ability_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    short_effect?: StringNullableFilter;
}
