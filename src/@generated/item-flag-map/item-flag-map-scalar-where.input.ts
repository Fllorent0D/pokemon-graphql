import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class item_flag_mapScalarWhereInput {

    @Field(() => [item_flag_mapScalarWhereInput], {nullable:true})
    AND?: Array<item_flag_mapScalarWhereInput>;

    @Field(() => [item_flag_mapScalarWhereInput], {nullable:true})
    OR?: Array<item_flag_mapScalarWhereInput>;

    @Field(() => [item_flag_mapScalarWhereInput], {nullable:true})
    NOT?: Array<item_flag_mapScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_flag_id?: IntFilter;
}
