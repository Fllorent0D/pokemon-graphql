import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereInput } from '../move-meta-ailment-names/move-meta-ailment-names-where.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesOrderByWithAggregationInput } from '../move-meta-ailment-names/move-meta-ailment-names-order-by-with-aggregation.input';
import { Move_meta_ailment_namesScalarFieldEnum } from './move-meta-ailment-names-scalar-field.enum';
import { move_meta_ailment_namesScalarWhereWithAggregatesInput } from '../move-meta-ailment-names/move-meta-ailment-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    @Type(() => move_meta_ailment_namesWhereInput)
    where?: move_meta_ailment_namesWhereInput;

    @Field(() => [move_meta_ailment_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_meta_ailment_namesOrderByWithAggregationInput>;

    @Field(() => [Move_meta_ailment_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_meta_ailment_namesScalarFieldEnum>;

    @Field(() => move_meta_ailment_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_meta_ailment_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
