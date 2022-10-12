import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutContest_typesInput } from './moves-update-without-contest-types.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutContest_typesInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutContest_typesInput, {nullable:false})
    @Type(() => movesUpdateWithoutContest_typesInput)
    data!: movesUpdateWithoutContest_typesInput;
}
