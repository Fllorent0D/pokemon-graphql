import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class super_contest_combosScalarWhereInput {

    @Field(() => [super_contest_combosScalarWhereInput], {nullable:true})
    AND?: Array<super_contest_combosScalarWhereInput>;

    @Field(() => [super_contest_combosScalarWhereInput], {nullable:true})
    OR?: Array<super_contest_combosScalarWhereInput>;

    @Field(() => [super_contest_combosScalarWhereInput], {nullable:true})
    NOT?: Array<super_contest_combosScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;
}
