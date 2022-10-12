import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogCreateWithoutMovesInput } from './move-changelog-create-without-moves.input';

@InputType()
export class move_changelogCreateOrConnectWithoutMovesInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_changelogCreateWithoutMovesInput)
    create!: move_changelogCreateWithoutMovesInput;
}
