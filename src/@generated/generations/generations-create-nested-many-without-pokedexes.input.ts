import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutPokedexesInput } from './generations-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutPokedexesInput } from './generations-create-or-connect-without-pokedexes.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedManyWithoutPokedexesInput {

    @Field(() => [generationsCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsCreateWithoutPokedexesInput)
    create?: Array<generationsCreateWithoutPokedexesInput>;

    @Field(() => [generationsCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<generationsCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: Array<generationsWhereUniqueInput>;
}
