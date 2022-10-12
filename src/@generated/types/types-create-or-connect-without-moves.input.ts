import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutMovesInput } from './types-create-without-moves.input';

@InputType()
export class typesCreateOrConnectWithoutMovesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutMovesInput, {nullable:false})
    @Type(() => typesCreateWithoutMovesInput)
    create!: typesCreateWithoutMovesInput;
}
