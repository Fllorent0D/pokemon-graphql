import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutGenerationsInput } from './types-create-without-generations.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutGenerationsInput } from './types-create-or-connect-without-generations.input';
import { typesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class typesCreateNestedManyWithoutGenerationsInput {

    @Field(() => [typesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => typesCreateWithoutGenerationsInput)
    create?: Array<typesCreateWithoutGenerationsInput>;

    @Field(() => [typesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => typesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<typesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: Array<typesWhereUniqueInput>;
}
