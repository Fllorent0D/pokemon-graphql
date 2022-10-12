import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from '../version-names/version-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneversionNamesArgs {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;
}
