import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsUpdateWithoutPokedexesInput } from './generations-update-without-pokedexes.input';

@InputType()
export class generationsUpdateWithWhereUniqueWithoutPokedexesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutPokedexesInput)
    data!: generationsUpdateWithoutPokedexesInput;
}
