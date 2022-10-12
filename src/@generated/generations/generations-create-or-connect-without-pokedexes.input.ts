import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutPokedexesInput } from './generations-create-without-pokedexes.input';

@InputType()
export class generationsCreateOrConnectWithoutPokedexesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => generationsCreateWithoutPokedexesInput)
    create!: generationsCreateWithoutPokedexesInput;
}
