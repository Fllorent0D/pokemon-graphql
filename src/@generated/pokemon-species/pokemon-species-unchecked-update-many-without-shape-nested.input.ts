import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutShapeInput } from './pokemon-species-create-or-connect-without-shape.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutShapeInput } from './pokemon-species-upsert-with-where-unique-without-shape.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutShapeInput } from './pokemon-species-update-with-where-unique-without-shape.input';
import { pokemon_speciesUpdateManyWithWhereWithoutShapeInput } from './pokemon-species-update-many-with-where-without-shape.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUncheckedUpdateManyWithoutShapeNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutShapeInput)
    create?: Array<pokemon_speciesCreateWithoutShapeInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutShapeInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutShapeInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutShapeInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutShapeInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    set?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    disconnect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    delete?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutShapeInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutShapeInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutShapeInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutShapeInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}
