import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class move_flavor_summariesScalarWhereInput {

    @Field(() => [move_flavor_summariesScalarWhereInput], {nullable:true})
    AND?: Array<move_flavor_summariesScalarWhereInput>;

    @Field(() => [move_flavor_summariesScalarWhereInput], {nullable:true})
    OR?: Array<move_flavor_summariesScalarWhereInput>;

    @Field(() => [move_flavor_summariesScalarWhereInput], {nullable:true})
    NOT?: Array<move_flavor_summariesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor_summary?: StringNullableFilter;
}
