import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsUpdateWithoutPokedexesInput } from './generations-update-without-pokedexes.input';
import { generationsCreateWithoutPokedexesInput } from './generations-create-without-pokedexes.input';

@InputType()
export class generationsUpsertWithWhereUniqueWithoutPokedexesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutPokedexesInput)
    update!: generationsUpdateWithoutPokedexesInput;

    @Field(() => generationsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => generationsCreateWithoutPokedexesInput)
    create!: generationsCreateWithoutPokedexesInput;
}
