import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class contest_combosScalarWhereInput {

    @Field(() => [contest_combosScalarWhereInput], {nullable:true})
    AND?: Array<contest_combosScalarWhereInput>;

    @Field(() => [contest_combosScalarWhereInput], {nullable:true})
    OR?: Array<contest_combosScalarWhereInput>;

    @Field(() => [contest_combosScalarWhereInput], {nullable:true})
    NOT?: Array<contest_combosScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;
}
