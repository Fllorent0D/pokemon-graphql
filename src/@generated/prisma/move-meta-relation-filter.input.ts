import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaWhereInput } from '../move-meta/move-meta-where.input';

@InputType()
export class Move_metaRelationFilter {

    @Field(() => move_metaWhereInput, {nullable:true})
    is?: move_metaWhereInput;

    @Field(() => move_metaWhereInput, {nullable:true})
    isNot?: move_metaWhereInput;
}
