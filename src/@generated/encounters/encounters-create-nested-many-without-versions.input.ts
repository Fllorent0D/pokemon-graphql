import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutVersionsInput } from './encounters-create-without-versions.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutVersionsInput } from './encounters-create-or-connect-without-versions.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class encountersCreateNestedManyWithoutVersionsInput {

    @Field(() => [encountersCreateWithoutVersionsInput], {nullable:true})
    @Type(() => encountersCreateWithoutVersionsInput)
    create?: Array<encountersCreateWithoutVersionsInput>;

    @Field(() => [encountersCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutVersionsInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;
}
