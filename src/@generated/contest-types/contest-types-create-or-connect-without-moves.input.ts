import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';

@InputType()
export class contest_typesCreateOrConnectWithoutMovesInput {

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;

    @Field(() => contest_typesCreateWithoutMovesInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutMovesInput)
    create!: contest_typesCreateWithoutMovesInput;
}
