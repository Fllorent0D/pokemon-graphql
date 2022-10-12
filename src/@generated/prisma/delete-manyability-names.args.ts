import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesWhereInput } from '../ability-names/ability-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyabilityNamesArgs {

    @Field(() => ability_namesWhereInput, {nullable:true})
    @Type(() => ability_namesWhereInput)
    where?: ability_namesWhereInput;
}
