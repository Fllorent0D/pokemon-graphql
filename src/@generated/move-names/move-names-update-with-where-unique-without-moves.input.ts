import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesWhereUniqueInput } from './move-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_namesUpdateWithoutMovesInput } from './move-names-update-without-moves.input';

@InputType()
export class move_namesUpdateWithWhereUniqueWithoutMovesInput {

    @Field(() => move_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_namesWhereUniqueInput)
    where!: move_namesWhereUniqueInput;

    @Field(() => move_namesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_namesUpdateWithoutMovesInput)
    data!: move_namesUpdateWithoutMovesInput;
}
