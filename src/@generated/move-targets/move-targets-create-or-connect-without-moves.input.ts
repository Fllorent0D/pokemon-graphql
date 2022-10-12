import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsWhereUniqueInput } from './move-targets-where-unique.input';
import { Type } from 'class-transformer';
import { move_targetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';

@InputType()
export class move_targetsCreateOrConnectWithoutMovesInput {

    @Field(() => move_targetsWhereUniqueInput, {nullable:false})
    @Type(() => move_targetsWhereUniqueInput)
    where!: move_targetsWhereUniqueInput;

    @Field(() => move_targetsCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_targetsCreateWithoutMovesInput)
    create!: move_targetsCreateWithoutMovesInput;
}
