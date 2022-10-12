import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogUpdateWithoutMovesInput } from './move-changelog-update-without-moves.input';

@InputType()
export class move_changelogUpdateWithWhereUniqueWithoutMovesInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_changelogUpdateWithoutMovesInput)
    data!: move_changelogUpdateWithoutMovesInput;
}
