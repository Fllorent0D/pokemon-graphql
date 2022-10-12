import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class machinesScalarWhereInput {

    @Field(() => [machinesScalarWhereInput], {nullable:true})
    AND?: Array<machinesScalarWhereInput>;

    @Field(() => [machinesScalarWhereInput], {nullable:true})
    OR?: Array<machinesScalarWhereInput>;

    @Field(() => [machinesScalarWhereInput], {nullable:true})
    NOT?: Array<machinesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    machine_number?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;
}
