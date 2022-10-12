import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutMovesInput } from './generations-create-without-moves.input';

@InputType()
export class generationsCreateOrConnectWithoutMovesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutMovesInput, {nullable:false})
    @Type(() => generationsCreateWithoutMovesInput)
    create!: generationsCreateWithoutMovesInput;
}
