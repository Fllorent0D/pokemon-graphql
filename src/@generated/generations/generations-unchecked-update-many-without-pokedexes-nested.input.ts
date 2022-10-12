import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutPokedexesInput } from './generations-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutPokedexesInput } from './generations-create-or-connect-without-pokedexes.input';
import { generationsUpsertWithWhereUniqueWithoutPokedexesInput } from './generations-upsert-with-where-unique-without-pokedexes.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithWhereUniqueWithoutPokedexesInput } from './generations-update-with-where-unique-without-pokedexes.input';
import { generationsUpdateManyWithWhereWithoutPokedexesInput } from './generations-update-many-with-where-without-pokedexes.input';
import { generationsScalarWhereInput } from './generations-scalar-where.input';

@InputType()
export class generationsUncheckedUpdateManyWithoutPokedexesNestedInput {

    @Field(() => [generationsCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsCreateWithoutPokedexesInput)
    create?: Array<generationsCreateWithoutPokedexesInput>;

    @Field(() => [generationsCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<generationsCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [generationsUpsertWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsUpsertWithWhereUniqueWithoutPokedexesInput)
    upsert?: Array<generationsUpsertWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    set?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    disconnect?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    delete?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsUpdateWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsUpdateWithWhereUniqueWithoutPokedexesInput)
    update?: Array<generationsUpdateWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [generationsUpdateManyWithWhereWithoutPokedexesInput], {nullable:true})
    @Type(() => generationsUpdateManyWithWhereWithoutPokedexesInput)
    updateMany?: Array<generationsUpdateManyWithWhereWithoutPokedexesInput>;

    @Field(() => [generationsScalarWhereInput], {nullable:true})
    @Type(() => generationsScalarWhereInput)
    deleteMany?: Array<generationsScalarWhereInput>;
}
