import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsWhereInput } from '../move-targets/move-targets-where.input';

@InputType()
export class Move_targetsRelationFilter {

    @Field(() => move_targetsWhereInput, {nullable:true})
    is?: move_targetsWhereInput;

    @Field(() => move_targetsWhereInput, {nullable:true})
    isNot?: move_targetsWhereInput;
}
