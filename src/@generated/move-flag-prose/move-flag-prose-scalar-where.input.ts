import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class move_flag_proseScalarWhereInput {

    @Field(() => [move_flag_proseScalarWhereInput], {nullable:true})
    AND?: Array<move_flag_proseScalarWhereInput>;

    @Field(() => [move_flag_proseScalarWhereInput], {nullable:true})
    OR?: Array<move_flag_proseScalarWhereInput>;

    @Field(() => [move_flag_proseScalarWhereInput], {nullable:true})
    NOT?: Array<move_flag_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_flag_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
