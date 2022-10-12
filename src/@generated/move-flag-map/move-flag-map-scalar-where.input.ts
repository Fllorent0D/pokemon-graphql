import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class move_flag_mapScalarWhereInput {

    @Field(() => [move_flag_mapScalarWhereInput], {nullable:true})
    AND?: Array<move_flag_mapScalarWhereInput>;

    @Field(() => [move_flag_mapScalarWhereInput], {nullable:true})
    OR?: Array<move_flag_mapScalarWhereInput>;

    @Field(() => [move_flag_mapScalarWhereInput], {nullable:true})
    NOT?: Array<move_flag_mapScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_flag_id?: IntFilter;
}
