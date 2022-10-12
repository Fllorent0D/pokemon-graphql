import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutGenerationsInput } from './abilities-create-without-generations.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutGenerationsInput } from './abilities-create-or-connect-without-generations.input';
import { abilitiesUpsertWithWhereUniqueWithoutGenerationsInput } from './abilities-upsert-with-where-unique-without-generations.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { abilitiesUpdateWithWhereUniqueWithoutGenerationsInput } from './abilities-update-with-where-unique-without-generations.input';
import { abilitiesUpdateManyWithWhereWithoutGenerationsInput } from './abilities-update-many-with-where-without-generations.input';
import { abilitiesScalarWhereInput } from './abilities-scalar-where.input';

@InputType()
export class abilitiesUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [abilitiesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesCreateWithoutGenerationsInput)
    create?: Array<abilitiesCreateWithoutGenerationsInput>;

    @Field(() => [abilitiesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<abilitiesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [abilitiesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<abilitiesUpsertWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    set?: Array<abilitiesWhereUniqueInput>;

    @Field(() => [abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    disconnect?: Array<abilitiesWhereUniqueInput>;

    @Field(() => [abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    delete?: Array<abilitiesWhereUniqueInput>;

    @Field(() => [abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: Array<abilitiesWhereUniqueInput>;

    @Field(() => [abilitiesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<abilitiesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [abilitiesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<abilitiesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [abilitiesScalarWhereInput], {nullable:true})
    @Type(() => abilitiesScalarWhereInput)
    deleteMany?: Array<abilitiesScalarWhereInput>;
}
