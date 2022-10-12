import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesWhereInput } from '../version-names/version-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyversionNamesArgs {

    @Field(() => version_namesWhereInput, {nullable:true})
    @Type(() => version_namesWhereInput)
    where?: version_namesWhereInput;
}
