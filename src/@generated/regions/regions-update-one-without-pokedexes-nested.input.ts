import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutPokedexesInput } from './regions-create-or-connect-without-pokedexes.input';
import { regionsUpsertWithoutPokedexesInput } from './regions-upsert-without-pokedexes.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { regionsUpdateWithoutPokedexesInput } from './regions-update-without-pokedexes.input';

@InputType()
export class regionsUpdateOneWithoutPokedexesNestedInput {

    @Field(() => regionsCreateWithoutPokedexesInput, {nullable:true})
    @Type(() => regionsCreateWithoutPokedexesInput)
    create?: regionsCreateWithoutPokedexesInput;

    @Field(() => regionsCreateOrConnectWithoutPokedexesInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: regionsCreateOrConnectWithoutPokedexesInput;

    @Field(() => regionsUpsertWithoutPokedexesInput, {nullable:true})
    @Type(() => regionsUpsertWithoutPokedexesInput)
    upsert?: regionsUpsertWithoutPokedexesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;

    @Field(() => regionsUpdateWithoutPokedexesInput, {nullable:true})
    @Type(() => regionsUpdateWithoutPokedexesInput)
    update?: regionsUpdateWithoutPokedexesInput;
}
