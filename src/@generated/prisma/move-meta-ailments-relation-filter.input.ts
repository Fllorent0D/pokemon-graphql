import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereInput } from '../move-meta-ailments/move-meta-ailments-where.input';

@InputType()
export class Move_meta_ailmentsRelationFilter {

    @Field(() => move_meta_ailmentsWhereInput, {nullable:true})
    is?: move_meta_ailmentsWhereInput;

    @Field(() => move_meta_ailmentsWhereInput, {nullable:true})
    isNot?: move_meta_ailmentsWhereInput;
}
