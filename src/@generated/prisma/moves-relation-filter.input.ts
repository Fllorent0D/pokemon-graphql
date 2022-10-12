import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereInput } from '../moves/moves-where.input';

@InputType()
export class MovesRelationFilter {

    @Field(() => movesWhereInput, {nullable:true})
    is?: movesWhereInput;

    @Field(() => movesWhereInput, {nullable:true})
    isNot?: movesWhereInput;
}
