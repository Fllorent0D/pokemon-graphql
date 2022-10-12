import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesCreateInput } from '../berry-firmness-names/berry-firmness-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesCreateInput, {nullable:false})
    @Type(() => berry_firmness_namesCreateInput)
    data!: berry_firmness_namesCreateInput;
}
