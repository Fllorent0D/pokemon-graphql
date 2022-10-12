import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsCreateInput } from '../berry-flavors/berry-flavors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneberryFlavorsArgs {

    @Field(() => berry_flavorsCreateInput, {nullable:false})
    @Type(() => berry_flavorsCreateInput)
    data!: berry_flavorsCreateInput;
}
