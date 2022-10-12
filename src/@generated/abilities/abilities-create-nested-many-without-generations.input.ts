import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutGenerationsInput } from './abilities-create-without-generations.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutGenerationsInput } from './abilities-create-or-connect-without-generations.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class abilitiesCreateNestedManyWithoutGenerationsInput {

    @Field(() => [abilitiesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesCreateWithoutGenerationsInput)
    create?: Array<abilitiesCreateWithoutGenerationsInput>;

    @Field(() => [abilitiesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<abilitiesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: Array<abilitiesWhereUniqueInput>;
}
