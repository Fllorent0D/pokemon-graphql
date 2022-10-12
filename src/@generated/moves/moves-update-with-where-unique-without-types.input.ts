import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutTypesInput } from './moves-update-without-types.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => movesUpdateWithoutTypesInput)
    data!: movesUpdateWithoutTypesInput;
}
