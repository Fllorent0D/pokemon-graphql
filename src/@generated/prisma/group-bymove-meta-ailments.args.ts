import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereInput } from '../move-meta-ailments/move-meta-ailments-where.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsOrderByWithAggregationInput } from '../move-meta-ailments/move-meta-ailments-order-by-with-aggregation.input';
import { Move_meta_ailmentsScalarFieldEnum } from './move-meta-ailments-scalar-field.enum';
import { move_meta_ailmentsScalarWhereWithAggregatesInput } from '../move-meta-ailments/move-meta-ailments-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsWhereInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereInput)
    where?: move_meta_ailmentsWhereInput;

    @Field(() => [move_meta_ailmentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_meta_ailmentsOrderByWithAggregationInput>;

    @Field(() => [Move_meta_ailmentsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_meta_ailmentsScalarFieldEnum>;

    @Field(() => move_meta_ailmentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_meta_ailmentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
