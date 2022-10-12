import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereInput } from '../move-meta-ailments/move-meta-ailments-where.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsOrderByWithRelationInput } from '../move-meta-ailments/move-meta-ailments-order-by-with-relation.input';
import { move_meta_ailmentsWhereUniqueInput } from '../move-meta-ailments/move-meta-ailments-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsWhereInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereInput)
    where?: move_meta_ailmentsWhereInput;

    @Field(() => [move_meta_ailmentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_meta_ailmentsOrderByWithRelationInput>;

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:true})
    cursor?: move_meta_ailmentsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
