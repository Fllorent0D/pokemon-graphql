import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesCreateInput } from '../move-meta-ailment-names/move-meta-ailment-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesCreateInput, {nullable:false})
    @Type(() => move_meta_ailment_namesCreateInput)
    data!: move_meta_ailment_namesCreateInput;
}
