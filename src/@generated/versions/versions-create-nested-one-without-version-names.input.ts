import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutVersion_namesInput } from './versions-create-without-version-names.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutVersion_namesInput } from './versions-create-or-connect-without-version-names.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class versionsCreateNestedOneWithoutVersion_namesInput {

    @Field(() => versionsCreateWithoutVersion_namesInput, {nullable:true})
    @Type(() => versionsCreateWithoutVersion_namesInput)
    create?: versionsCreateWithoutVersion_namesInput;

    @Field(() => versionsCreateOrConnectWithoutVersion_namesInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutVersion_namesInput)
    connectOrCreate?: versionsCreateOrConnectWithoutVersion_namesInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;
}
