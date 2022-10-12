import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_targetsInput } from './moves-update-without-move-targets.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutMove_targetsInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_targetsInput, {nullable:false})
    @Type(() => movesUpdateWithoutMove_targetsInput)
    data!: movesUpdateWithoutMove_targetsInput;
}
