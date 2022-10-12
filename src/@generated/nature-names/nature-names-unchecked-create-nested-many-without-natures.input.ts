import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesCreateWithoutNaturesInput } from './nature-names-create-without-natures.input';
import { Type } from 'class-transformer';
import { nature_namesCreateOrConnectWithoutNaturesInput } from './nature-names-create-or-connect-without-natures.input';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';

@InputType()
export class nature_namesUncheckedCreateNestedManyWithoutNaturesInput {

    @Field(() => [nature_namesCreateWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesCreateWithoutNaturesInput)
    create?: Array<nature_namesCreateWithoutNaturesInput>;

    @Field(() => [nature_namesCreateOrConnectWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesCreateOrConnectWithoutNaturesInput)
    connectOrCreate?: Array<nature_namesCreateOrConnectWithoutNaturesInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    connect?: Array<nature_namesWhereUniqueInput>;
}
